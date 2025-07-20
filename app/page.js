"use client";
import Terminal from "./components/Terminal";
import { useState, useEffect } from "react";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const welcomeText = "> Welcome to Iranga Umayantha's Cybersecurity Portfolio";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setTypedText((prev) => prev + welcomeText[index]);
      index++;
      if (index === welcomeText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);


  return (
    <main className="min-h-screen bg-black text-green-500 font-mono p-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <Terminal />
        <div className="mb-8 animate-fadeIn">
          <p>{typedText}<span className="animate-pulse">|</span></p>
        </div>

        <div className="mb-8 animate-slideUp opacity-0 animate-delay-200">
          <p className="text-green-300">&gt; whoami</p>
          <p>Iranga Umayantha — Cybersecurity Enthusiast | SOC Analyst Aspirant</p>
          <p>Self-taught with hands-on experience in ethical hacking, network security, and system hardening.</p>
        </div>

        <div className="mb-8 animate-slideUp opacity-0 animate-delay-300">
          <p className="text-green-300">&gt; skills --list</p>
          <ul className="list-disc list-inside">
            <li>Python, JavaScript, HTML, CSS, Git, TailwindCSS</li>
            <li>Wireshark, Metasploit, Nmap, Burp Suite, Nessus</li>
            <li>Windows, Kali Linux, Ubuntu</li>
          </ul>
        </div>

        <div className="mb-8 animate-slideUp opacity-0 animate-delay-400">
          <p className="text-green-300">&gt; ./projects</p>
          <ul className="list-disc list-inside">
            <li>TryHackMe Writeups</li>
            <li>Kali Linux Lab Setup</li>
            <li>Python Port Scanner</li>
          </ul>
        </div>

        <div className="mb-8 animate-slideUp opacity-0 animate-delay-500">
          <p className="text-green-300">&gt; show-certifications</p>
          <ul className="list-disc list-inside">
            <li>Introduction to Cybersecurity (Cisco)</li>
            <li>Certified in Cybersecurity CC Prep - ISC2 (Udemy)</li>
            <li>Cisco CCNA 200-301 (Udemy)</li>
          </ul>
        </div>

        <div className="mb-8 animate-slideUp opacity-0 animate-delay-600">
          <p className="text-green-300">&gt; contact</p>
          <ul className="list-none">
            <li>Email: irangaumayantha00@gmail.com</li>
            <li>Phone: +94 763502888</li>
            <li>LinkedIn: linkedin.com/in/iranga-umayantha-20973b184</li>
            <li>GitHub: github.com/Irangaumayantha2001</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
