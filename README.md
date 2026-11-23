# Family Quiz Game

An after-dinner family quiz for one phone passed round the table.

**Play it:** https://bengammon.github.io/family-quiz-game/

- Each player picks an animal and enters a name and age. Age sets the starting level, then difficulty adapts: harder after right answers, easier after wrong ones.
- Questions are read aloud ("Sam, you're up next…") using the phone's built-in speech, with a host who varies what they say.
- Mix of multiple choice and open questions (the table judges open answers).
- Topics: General Knowledge, Geography, Music, Science, Maths, Disney.
- Picture questions: clock faces, shapes, flags and emoji puzzles.
- Maths, clock and shape questions are generated, so they never run out.
- Questions already seen on a phone are held back until the rest have been played.
- Bright "sweet shop" look, sound effects and confetti. All text meets WCAG AA contrast (4.5:1).

## Files

- `family-quiz-game.html` is the source: question bank, logic and styles. It's written as page content only (no `<!doctype>`/`<head>`), because it's also published as a Claude artifact, which adds that wrapper.
- `index.html` is generated from it for GitHub Pages. **Don't edit it by hand.** After changing the source, rebuild it:

  ```
  node tools/build-pages.js
  ```

  Then commit both files and push. GitHub Pages updates within a minute or two.

## Editing questions

Questions live in the `BANK` object near the top of the script. Each row is:

```
[difficulty 1-5, question, answer, wrong1, wrong2, wrong3, mcOnly?, emoji?]
```

Difficulty guide: 1 = easy for a 6–8 year old, 2 = 8–10, 3 = 11–14 / easy adult, 4 = average adult, 5 = quiz buff.
