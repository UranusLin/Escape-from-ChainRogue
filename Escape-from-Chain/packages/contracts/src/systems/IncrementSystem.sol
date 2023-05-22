// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import {
  Counter,
  Position,
  PositionTableId,
  PositionData,
  Health,
  HealthData
  } from "../codegen/Tables.sol";
import { addressToEntity } from "../Utils.sol";
import { getKeysWithValue } from "@latticexyz/world/src/modules/keyswithvalue/getKeysWithValue.sol";

contract IncrementSystem is System {
  function increment() public returns (uint32) {
    uint32 counter = Counter.get();
    uint32 newValue = counter + 1;
    Counter.set(newValue);
    return newValue;
  }

  // generate player
  function spawn(int32 x, int32 y, int32 health) public {
    require(x != 0 || y != 0, "cannot spawn at 0 coord");
    bytes32 player = addressToEntity(_msgSender());
    PositionData memory existingPosition = Position.get(player);

    require(existingPosition.x == 0 && existingPosition.y == 0, "player already spawned");

    bytes32[] memory playersAtPosition = getKeysWithValue(PositionTableId, Position.encode(x, y));
    require(playersAtPosition.length == 0, "spawn location occupied");

    Position.set(player, x, y);
    Health.set(player, HealthData({
      max: 100,
      current: health
    }));
//    Strength.set(player, 25);
  }
}
