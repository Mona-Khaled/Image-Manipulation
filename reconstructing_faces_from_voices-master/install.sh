#!/bin/bash 
conda create --name voice2face --file requirements.txt
conda activate voice2face
pip install -q webrtcvad
