import { getComponentValue } from "@latticexyz/recs";
import { awaitStreamValue } from "@latticexyz/utils";
import { ClientComponents } from "./createClientComponents";
import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls(
  { worldSend, txReduced$, singletonEntity }: SetupNetworkResult,
  components: ClientComponents
) {
  const increment = async () => {
    const tx = await worldSend("increment", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(components.Counter, singletonEntity);
  };

  const spawn = (x: number, y: number, health: number) => {
    worldSend("spawn", [x, y, health]);
  };

  const decrease = async () => {
    const tx = await worldSend("decrease", []);
    await awaitStreamValue(txReduced$, (txHash) => txHash === tx.hash);
    return getComponentValue(components.Ammo, singletonEntity);
  };

  return {
    increment,
    spawn,
    decrease,
  };
}
