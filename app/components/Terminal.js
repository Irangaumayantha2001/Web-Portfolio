"use client";
import { useState } from "react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const commands = {
    help: "Available commands: help, whoami, skills, projects, certs, contact, clear",
    whoami: "Iranga Umayantha – Cybersecurity Enthusiast | SOC Analyst Aspirant",
    skills: "Python, JavaScript, HTML, CSS, Git, TailwindCSS | Tools: Wireshark, Metasploit, Nmap, Burp Suite, Nessus | OS: Windows, Kali Linux, Ubuntu",
    projects: "TryHackMe Writeups | Kali Linux Lab Setup | Python Port Scanner",
    certs: "Cisco Cybersecurity Intro | ISC2 CC Prep (Udemy) | Cisco CCNA 200-301 (Udemy)",
    contact: "Email: irangaumayantha00@gmail.com | GitHub: github.com/Irangaumayantha2001 | LinkedIn: linkedin.com/in/iranga-umayantha-20973b184",
    clear: "CLEAR_SCREEN",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    const output = commands[trimmed] || `Command not found: ${trimmed}`;
    setHistory((prev) =>
      trimmed === "clear" ? [] : [...prev, { cmd: trimmed, res: output }]
    );
    setInput("");
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 border border-green-700 rounded-lg">
      {history.map((entry, i) => (
        <div key={i}>
          <p className="mb-1">&gt; {entry.cmd}</p>
          {entry.res !== "CLEAR_SCREEN" && <p className="mb-2">{entry.res}</p>}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label htmlFor="cmd">&gt;</label>
        <input
          id="cmd"
          type="text"
          className="bg-black border-none outline-none ml-2 w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
}
