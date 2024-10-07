import tkinter as tk
from tkinter import filedialog
import pygame

# Initialize pygame mixer for audio
pygame.mixer.init()

# Function to play the selected song
def play_song():
    song = filedialog.askopenfilename(title="Choose a song", filetypes=(("MP3 Files", "*.mp3"),))
    if song:
        pygame.mixer.music.load(song)
        pygame.mixer.music.play()

# Function to pause the song
def pause_song():
    pygame.mixer.music.pause()

# Function to resume the song
def resume_song():
    pygame.mixer.music.unpause()

# Function to stop the song
def stop_song():
    pygame.mixer.music.stop()

# Initialize tkinter window
window = tk.Tk()
window.title("Basic Music Player")
window.geometry("300x200")

# Play Button
play_button = tk.Button(window, text="Play", command=play_song)
play_button.pack(pady=10)

# Pause Button
pause_button = tk.Button(window, text="Pause", command=pause_song)
pause_button.pack(pady=10)

# Resume Button
resume_button = tk.Button(window, text="Resume", command=resume_song)
resume_button.pack(pady=10)

# Stop Button
stop_button = tk.Button(window, text="Stop", command=stop_song)
stop_button.pack(pady=10)

# Run the application
window.mainloop()
