export type LifeStage = {
  title: string;
  tone: string;
  themes: string[];
  prompts: string[];
};

export const lifeStages: LifeStage[] = [
  { title: "Before I Remember", tone: "Origins and family roots", themes: ["birth", "family roots", "village/town", "first home", "naming stories"], prompts: ["What stories did your family tell about your birth?", "Where did your life begin?", "What kind of home raised you?"] },
  { title: "Childhood / First Home", tone: "Safe, warm, innocent", themes: ["toys", "first school", "mother feeding you", "sleeping beside mother", "rainy days"], prompts: ["What did home smell like in childhood?", "Which small routine made you feel safe?"] },
  { title: "School Days", tone: "Nostalgic routine", themes: ["uniforms", "lunchboxes", "school bus", "exams", "waking up early"], prompts: ["Which lunchbox memory stayed with you?", "How did your mother help on exam mornings?"] },
  { title: "Teenage Years", tone: "Emotional transition and growth", themes: ["rebellion", "identity", "arguments", "friendships", "changing relationship"], prompts: ["When did you begin seeing your mother differently?", "What argument later became understanding?"] },
  { title: "College / First Distance", tone: "Homesickness and distance", themes: ["hostel life", "moving away", "late-night calls", "financial struggles", "missing home food"], prompts: ["What made distance feel real for the first time?", "Which call from home still echoes?"] },
  { title: "First Job / Office Life", tone: "Heavier and reflective", themes: ["city life", "office stress", "loneliness", "food delivery", "missing festivals"], prompts: ["What did success cost emotionally?", "When did guilt of not visiting home appear?"] },
  { title: "Home / Village / Town Memories", tone: "Memory map of belonging", themes: ["railway station", "hometown roads", "tea shops", "family house", "childhood streets"], prompts: ["Which street still feels like your true address?", "Which station platform holds your arrivals and departures?"] },
  { title: "Mother's Hands", tone: "Poetic emotional centerpiece", themes: ["sacrifice", "cooking", "waiting", "worrying", "silent support"], prompts: ["What did she do quietly that changed your life?", "Which care looked ordinary then, extraordinary now?"] },
  { title: "Festivals & Food Memories", tone: "Warm celebratory nostalgia", themes: ["homemade food", "festival cooking", "sweets", "regional recipes", "comfort meals"], prompts: ["Which dish tastes like home itself?", "Which festival kitchen memory still feels alive?"] },
  { title: "Letters to Mom", tone: "Intimate gratitude", themes: ["letters", "voice messages", "future messages", "gratitude"], prompts: ["What would you say if she were listening quietly right now?", "What gratitude has stayed unspoken?"] }
];
