@echo off
cd neuro-app\venv\Scripts
call activate
cd ..
cd ..
uvicorn main:app --reload
start cmd /k