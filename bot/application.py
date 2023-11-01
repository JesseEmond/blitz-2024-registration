#!/usr/bin/env python

import asyncio
import dataclasses
import json
import os

import cattrs
import websockets

from bot import Bot
from game_message import GameMessage


async def run():
    uri = "ws://127.0.0.1:8765"

    async with websockets.connect(uri, max_size=None) as websocket:
        is_server = "TOKEN" in os.environ
        bot = Bot(on_server=is_server or 'VERBOSE' in os.environ)
        if "TOKEN" in os.environ:
            await websocket.send(json.dumps({"type": "REGISTER", "token": os.environ["TOKEN"]}))
        else:
            await websocket.send(json.dumps({"type": "REGISTER", "teamName": "MyPythonicBot"}))

        await game_loop(websocket=websocket, bot=bot)


async def game_loop(websocket: websockets.WebSocketServerProtocol, bot: Bot):
    while True:
        try:
            message = await websocket.recv()
        except websockets.exceptions.ConnectionClosed:
            # Connection is closed, the game is probably over
            print("Websocket was closed.")
            bot.on_close()
            break

        game: GameMessage = cattrs.structure(json.loads(message), GameMessage)

        if game.lastTickErrors:
            print(f'Errors during last tick : {game.lastTickErrors}')

        payload = {
            "type": "COMMAND",
            "tick": game.tick,
            "actions": [dataclasses.asdict(action) for action in bot.get_next_move(game)]
        }

        await websocket.send(json.dumps(payload))


if __name__ == "__main__":
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.run_until_complete(run())
