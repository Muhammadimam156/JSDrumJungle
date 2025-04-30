
# **BeatBoxJS** 🥁  
*A Web-Based Interactive Drum Kit*  

 

**BeatBoxJS** is a keyboard-controlled drum machine built with vanilla JavaScript, HTML5, and CSS3. Trigger realistic drum sounds using your computer keyboard or mouse, complete with dynamic visual feedback. Perfect for musicians, developers, or anyone who wants to jam in their browser!  

---

## **Features** ✨  
- 🎹 **8-Pad Drum Kit**: Kick, snare, hi-hat, toms, and crash cymbal.  
- ⌨️ **Keyboard & Click Support**: Play via keys (`Q`, `W`, `E`, etc.) or mouse.  
- 💥 **Visual Feedback**: Pads light up when activated.  
- 🔊 **Real Sound Samples**: Base64-encoded WAV files for instant playback.  
- 📱 **Responsive Design**: Works on desktop and mobile devices.  

---

## **Tech Stack** 🛠️  
- **Frontend**: Vanilla JavaScript, HTML5 Audio API, CSS3 animations.  
- **Sounds**: High-quality WAV samples (kick, snare, etc.).  
- **No Dependencies**: Zero frameworks or libraries—pure JS!  

---

## **Quick Start** 🚀  
1. **Clone the repo**:  
   ```bash
   git clone https://github.com/Muhammadimam156/JSDrumJungle.git
   ```
2. **Open `index.html`** in any modern browser.  
3. **Start drumming!**  
   - Press keys: `Q` (Kick), `W` (Snare), `E` (Hi-Hat), etc.  
   - Or click/tap the pads on screen.  

---

## **Customize** 🎨  
### **Add Your Own Sounds**  
Replace the Base64-encoded audio in the HTML file with your own WAV samples:  
```html
<audio data-key="81" src="your-kick-sound.wav"></audio>
```

### **Extend the Kit**  
1. Add more pads by duplicating the `<div class="key">` and `<audio>` elements.  
2. Update the `data-key` attributes to match new keyboard shortcuts (use [keycode.info](https://keycode.info/)).  

---

## **Contributing** 🤝  
Pull requests welcome! Here’s how:  
1. Fork the project.  
2. Create a branch (`git checkout -b feature/your-feature`).  
3. Commit changes (`git commit -m 'Add some feature'`).  
4. Push to the branch (`git push origin feature/your-feature`).  
5. Open a **Pull Request**.  

---

## **License** ⚖️  
MIT © [MUHAMMAD IMAM]  

