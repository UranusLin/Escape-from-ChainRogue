// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { System } from "@latticexyz/world/src/System.sol";
import { addressToEntity } from "../Utils.sol";
import { getUniqueEntity } from "@latticexyz/world/src/modules/uniqueentity/getUniqueEntity.sol";

import {
  Ammo
} from "../codegen/Tables.sol";

contract AmmoSystem is System {
  // function decrease() public returns (uint32) {
  //   uint32 ammo = Ammo.get();
  //   uint32 newValue = ammo ? ammo - 1 : 1;
  //   Ammo.set(newValue);
  //   return newValue;
  // }

}
