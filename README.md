
# Notes Application

A basic Notes application where you can add notes with their title and description. This application is created to learn the basic concept of react form handling and useState hook.


## Tech Stack

**React.js** 

**Vite FrameWork**

**TailWind CSS**


## Screenshot

<img width="1912" height="903" alt="image" src="https://github.com/user-attachments/assets/69019d5a-699e-4c93-bc30-6216438995e2" />


## Copy Structure 
 
01 **Create your project**  

npm create vite@latest my-project
cd my-project

02 **Install Tailwind CSS**

npm install tailwindcss @tailwindcss/vite

03 **Configure the Vite plugin**

paste same code in your vite.config.ts file 

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'


export default defineConfig({

  plugins: [react(), tailwindcss()],
  
})


04 **Run**

npm run dev




## License

Specify the license under which you’re sharing the project.
E.g., MIT License — or whichever you prefer.
## Contact / Author

Rajat Pandey https://github.com/RajatPandey10 – creator/maintainer of this project

