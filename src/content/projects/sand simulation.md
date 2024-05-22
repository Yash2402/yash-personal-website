---
title: Spring Simulation
pubDate: 2023-08-12
description: As a passionate enthusiast of physics and simulations, I undertook a project during my 12th-grade to delve into the intricacies of physics-based simulations. The objective was to develop a realistic cloth simulation using fundamental physics principles, particularly focusing on the behaviour of springs. I was not that focused on the code quality; I  will fix this in the future and optimize it. I will make this project in C++ using the SDL or Raylib libraries too.
banner:
    url: "../../imgs/wallpaperdark.png"
    alt: diamond
resources: [
    {url: https://www.youtube.com/@TheCodingTrain, name: The Coding Train}, 
    {url: https://en.wikipedia.org/wiki/Cellular_automaton, name: Wikipedia/Cellular-Automaton}
]
---
# Introduction
This was a fun project that I made when I was in first semester of my university.
The implemented simulation utilises [cellular automaton](https://youtube.com) principles to mimic the behaviour of granular materials such as sand, water, and smoke. This project leverages the Python programming language along with the Pygame library for graphical representation.

# Cellular Automaton

A Cellular Automaton consists of a regular grid of cells, each in one of a finite number of states, such as on and off (in contrast to a coupled map lattice). The grid can be in any finite number of dimensions. For each cell, a set of cells called its neighbourhood is defined relative to the specified cell. An initial state (time t = 0) is selected by assigning a state for each cell. A new generation is created (advancing t by 1), according to some fixed rule (generally, a mathematical function) that determines the new state of each cell in terms of the current state of the cell and the states of the cells in its neighbourhood. Typically, the rule for updating the state of cells is the same for each cell and does not change over time, and is applied to the whole grid simultaneously, though exceptions are known, such as the stochastic cellular automaton and asynchronous cellular automaton.

# Cell types 

Sand (Orange) : Represents granular particles, which settle under gravity and can accumulate in piles.  
Water (Blue) : Exhibits fluid-like behaviour, flowing and filling up available space.  
Smoke (Grey) : Demonstrates the diffusion and dispersion characteristics typical of gaseous substances.  
Wall (Black) : Static barriers that do not undergo any changes during simulation.  
Air (White) : The default state representing empty space where dynamic interactions occur.

# How to use 
- Clone the repository:
```bash
git clone https://github.com/Yash2402/Cellular-Automaton.git
```
- Navigate to the directory Cellular-Automaton:
```bash
cd Cellular-Automaton
```
- Install requirements:
```bash
python3 -m pip install -r requirements.txt
```
- Run:
```bash
python3 main.py
```

# Future Directions
While this project represents an exciting exploration into cellular automaton simulations, I am eager to expand my horizons and explore new avenues within this domain. Future endeavours may include:  
- Experimenting with more complex cellular automaton rules to simulate additional phenomena such as fire propagation or crowd dynamics.  
- Integrating interactive elements into the simulation to enhance user engagement and understanding.  
- Collaborating with other enthusiasts to explore innovative applications of cellular automaton in fields such as urban planning or game development.