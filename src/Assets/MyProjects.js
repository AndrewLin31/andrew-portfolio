import proj1 from './proj1.jpg';
import proj2 from './proj2.jpg';
import proj3 from './proj3.gif';
import proj4 from './proj4.gif';

const MyProjects = [
    {
        p_no: 1,
        p_name: "Blood Pressure Monitor",
        p_desc: "The Blood Pressure Monitor is a prototype for ENDEAVR's future line of monitors to help directly transmit user data to remote doctors. The device was programmed in C++ to inflate/deflate a pressure bag as well as to measure the user's blood pressure. Hardware consists of 3 main components: Pressure Sensor, Air Pump, and Air Valve. The MCU used was an Arduino Mega 2560 (Any MCU with 2 Analogs and 1 I2C will work).",
        p_img: proj1,
        p_link: "https://engineering.tamu.edu/news/2022/10/etid-students-recognized-for-their-impact-on-small-communities.html"
    },
    {
        p_no: 2,
        p_name: "EMG Signal Processing",
        p_desc: "Worked with EMG signals coming from a user to amplify and digitize EMG readings to interpret them into controls to play Pac Man. The device takes in 3 readings from the user, EMG+, EMG-, and a ground reference unrelated to the muscle. The signals get sent from the Arduino into the computer where my LabVIEW program processes the signal and uses the information to interpret user's movement.",
        p_img: proj2,
        p_link: "https://youtu.be/tEgYcARKn_k?si=bTAjRQeI1Q0QYb0N"
    },
    {
        p_no: 3,
        p_name: "Rise of the Elements",
        p_desc: "Rise of the Elements was one of my first Hackathon products. I worked in a team of 3 to develop a multiplayer rpg game with mob drops and spell varieties. This game was programmed in C# in Unity while also using PUN(Photon Unity Networking) library as our multiplayer framework.",
        p_img: proj3
    },
    {
        p_no: 4,
        p_name: "Face Tracker",
        p_desc: "The Face Tracker project was made to follow the user's face on camera. Using OpenCV framework to detect faces, port programming to transmit data, and an Arduino connected to 2 servo motors, I managed to have a working device that communicates with my computer to transmit data from OpenCV to the Arduino.",
        p_img: proj4,
        p_link: "https://github.com/AndrewLin31/faceTrackerProj"
    },
]

export default MyProjects;
