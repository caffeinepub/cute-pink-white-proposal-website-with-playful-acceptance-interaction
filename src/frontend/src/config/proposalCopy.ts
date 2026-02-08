// Personalization constants - Edit these to customize your proposal!
export const BOYFRIEND_NAME = "Shakti"; // Leave empty for generic message, or add name like "Alex"
export const DATE_LABEL = "Propose Day"; // e.g., "Valentine's Day", "Our Anniversary", etc.

// Helper function to build the main proposal question
export function getProposalQuestion(): string {
  if (BOYFRIEND_NAME) {
    return `${BOYFRIEND_NAME}, will you be my boyfriend forever?`;
  }
  return "Will you be my boyfriend forever?";
}

// Helper function to build the supportive subtext
export function getProposalSubtext(): string {
  return "Are you ready to be my YELLOW FOREVER?";
}

// Acceptance message after "Yes"
export function getAcceptanceMessage(): string {
  if (BOYFRIEND_NAME) {
    return `Yay! ${BOYFRIEND_NAME}, you've made me the happiest person alive! 💖`;
  }
  return "Yay! You've made me the happiest person alive! 💖";
}

// Playful "No" button messages (cycles through these)
export const NO_BUTTON_MESSAGES = [
  "Are you sure? 🥺",
  "Please? 💕",
  "Think about it... 💭",
  "Pretty please? 🌸",
  "One more chance? 💝",
  "You know you want to... 😊",
  "Come on... 💗",
  "I'll wait... ⏰",
  "Really? 🥹",
  "Just say yes! 💖"
];
