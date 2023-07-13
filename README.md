# EthGlobal 2023 - Autonomous Worlds

[ETHGlobal](https://ethglobal.com/) Hackathons of [Autonomous Worlds](https://ethglobal.com/events/autonomous#docs) project.

Explore Autonomous Worlds and MUD with 0xPARC, Lattice, and ETHGlobal at May 18 – 26, 2023.  
Leverage the power of MUD, a new framework designed for ambitious Ethereum applications, and follow in the footsteps of dozens of teams that have already built unique projects with it, including OPCraft — an onchain voxel world, EVM Factorio, real-time strategy games, and more.
[See the Prizes](https://ethglobal.com/events/autonomous/prizes)

## Project: [Escape-from-Chain](https://ethglobal.com/showcase/escape-from-chain-w9npn)
LOGO:  
![](https://github.com/D50000/Ethglobal-2023-autonomous-Escape-from-ChainRogue/blob/main/assets/logo.jpg)  

Idea & Framework:
"Escape-from-Chain" is an innovative roguelike game built using a unique blend of technologies and approaches. The gameplay is powered by Multi-User Dungeon 2 **(MUD2)**, a popular engine for creating text-based adventure games, which provides the core mechanics and systems.

We wanted to give the game a visual appeal without sacrificing the essence of MUD. Hence, we chose to use the **HTMLCanvasElement** for rendering in-game visuals. This allowed us to create a 2D graphics display while keeping the text-based elements from MUD2 intact.

On the blockchain side, we integrated **Ethereum smart contracts** for creating and managing **Non-Fungible Tokens (NFTs)**. This adds a whole new level of engagement, as players can earn and trade unique in-game assets on the blockchain.

**ReactJS** was used for building the user interface. Its component-based architecture greatly simplified our development process, allowing us to create reusable UI elements that maintain consistency throughout the game.

## Gameplay
Start Menu:  
![](https://github.com/D50000/Ethglobal-2023-autonomous-Escape-from-ChainRogue/blob/main/assets/demo1.jpg)  
  
Playing:  
![](https://github.com/D50000/Ethglobal-2023-autonomous-Escape-from-ChainRogue/blob/main/assets/demo2.jpg)  
  
End Menu:  
![](https://github.com/D50000/Ethglobal-2023-autonomous-Escape-from-ChainRogue/blob/main/assets/demo3.jpg)  

## Project Structure

src/  
|- pages/  
| |- Home/  
| | |- Home.js  
| | |- Home.css  
| |- About/  
| | |- About.js  
| | |- About.css  
|- components/  
| |- Header/  
| | |- Header.js  
| | |- Header.css  
| |- Footer/  
| | |- Footer.js  
| | |- Footer.css  
|- assets/  
| |- images/  
| | |- logo.png  
| |- fonts/  
| | |- OpenSans.ttf  
|- App.js  
|- index.js  
|- index.css

### Notes:

- npm: v9.6.7
- node: v18.16.0
- `brew install libusb`
- `curl -L https://foundry.paradigm.xyz | bash`
  https://book.getfoundry.sh/getting-started/installation

### Reference:

- https://github.com/latticexyz/react-todo
- https://github.com/D50000/Space-Drift-2D/tree/main
