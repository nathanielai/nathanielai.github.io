"use client";

import { useEffect, useState } from "react";

const symbols = [
  { mark: "⌘", name: "Command" },
  { mark: "{ }", name: "Code" },
  { mark: "◈", name: "Data" },
  { mark: "✳", name: "Intelligence" },
  { mark: "≋", name: "Signal" },
  { mark: "↗", name: "Growth" },
];
const initialDeck = [...symbols, ...symbols];

export default function PatternGame() {
  const [deck, setDeck] = useState(initialDeck);
  const [started, setStarted] = useState(false);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [message, setMessage] = useState(
    "Ready when you are. Find all six pairs.",
  );
  const complete = matched.length === symbols.length;

  useEffect(() => {
    if (flipped.length !== 2) return;
    const timer = window.setTimeout(() => setFlipped([]), 900);
    return () => window.clearTimeout(timer);
  }, [flipped]);

  function start() {
    const shuffled = [...initialDeck];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDeck(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setStarted(true);
    setMessage("Choose two cards to find a matching pair.");
  }

  function reveal(index: number) {
    if (
      !started ||
      complete ||
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(deck[index].name)
    )
      return;
    const next = [...flipped, index];
    setFlipped(next);
    if (next.length === 2) {
      const nextMoves = moves + 1;
      setMoves(nextMoves);
      if (deck[next[0]].name === deck[index].name) {
        const nextMatched = [...matched, deck[index].name];
        setMatched(nextMatched);
        setFlipped([]);
        setMessage(
          nextMatched.length === symbols.length
            ? `All connected! You found six pairs in ${nextMoves} moves.`
            : `${deck[index].name} matched. ${nextMatched.length} of six pairs found.`,
        );
      } else {
        setMessage("Not a match. Try another pair.");
      }
    }
  }

  return (
    <section
      id="playground"
      className="playground-section wrap"
      aria-labelledby="playground-title"
    >
      <div className="playground-copy">
        <div className="eyebrow">04 / A LITTLE CURIOSITY</div>
        <h2 id="playground-title">
          Good engineering.
          <br />
          <span className="muted">A playful side.</span>
        </h2>
        <p>
          A small interactive experiment in recognizing patterns and connecting
          the dots. Take a moment to test your memory.
        </p>
        <div className="game-instructions">
          <span className="game-label">HOW TO PLAY</span>
          <p>
            Reveal two cards at a time. Match all six pairs in as few moves as
            you can. No timer, no rush.
          </p>
        </div>
        <a className="text-link" href="#contact">
          Have an interactive idea of your own?{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className={`game-panel${complete ? " game-complete" : ""}`}>
        <div className="game-top">
          <div>
            <span className="game-label">THE PATTERN LAB</span>
            <h3>
              Pattern match<span>.</span>
            </h3>
          </div>
          <span className="game-badge">
            {complete ? "COMPLETE" : "MEMORY GAME"}
          </span>
        </div>
        <div className="game-stats">
          <span>
            Pairs <strong>{matched.length} / 6</strong>
          </span>
          <span>
            Moves <strong>{moves.toString().padStart(2, "0")}</strong>
          </span>
        </div>
        <div
          className="game-board"
          role="group"
          aria-label="Memory cards"
          aria-describedby="game-status"
        >
          {deck.map((symbol, index) => {
            const found = matched.includes(symbol.name);
            const visible = found || flipped.includes(index);
            return (
              <button
                key={index}
                type="button"
                className={`memory-card${visible ? " revealed" : ""}${found ? " matched" : ""}`}
                aria-label={`Card ${index + 1}${visible ? `: ${symbol.name}${found ? ", matched" : ""}` : ": hidden"}`}
                aria-disabled={
                  !started ||
                  found ||
                  flipped.includes(index) ||
                  flipped.length === 2
                }
                onClick={() => reveal(index)}
              >
                <span aria-hidden="true">{visible ? symbol.mark : "·"}</span>
                {found && <small aria-hidden="true">✓</small>}
              </button>
            );
          })}
        </div>
        <p
          id="game-status"
          className="game-status"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
        <div className="game-bottom">
          <button type="button" className="button primary" onClick={start}>
            {!started ? "Start game" : complete ? "Play again" : "Restart game"}
            <span aria-hidden="true">↗</span>
          </button>
          <span>Made to be explored.</span>
        </div>
      </div>
    </section>
  );
}
