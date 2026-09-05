const data = {
  lrc: {
    title: "LRC Hub",
    meta: "WEB DESIGN · UX/UI · FRONT-END",
    sub: "A centralized digital workspace for Learning Resource Center staff.",
    role: "Web Design, UX/UI, Front-End Development",
    tools: "HTML, CSS, JavaScript, Git/GitHub, Codex",
    status: "In use by LRC staff",
    img: "assets/lrc-hub.png",
    challenge: [
      "Frequently used workplace resources were primarily managed through individual browser bookmarks, making them easy to lose or organize inconsistently. There was no single shared place for staff to find the links they use throughout their work.",
    ],
    approach: [
      "I initiated the project after seeing the problem in my own work. I designed the structure around how staff actually find resources: clear categories, a prominent search experience, favorites, and a personal My Links area.",
      "This was the second resource hub I built. I applied what I learned from the earlier ARC Library Hub to create a more restrained and systematic interface.",
    ],
    development: [
      "I defined the experience, organization, functionality, and testing. Codex assisted during implementation as a debugger and code-cleanup tool, while I reviewed the behavior and decided what changed.",
    ],
    outcome: [
      "The hub is now used by Learning Resource Center staff to find workplace links and resources more easily.",
    ],
    gallery: [],
  },
  codease: {
    title: "CodEase",
    meta: "PRODUCT DESIGN · AI WORKFLOW · AUTOMATION",
    sub: "Making website maintenance accessible through natural language.",
    role: "Product Design, Workflow Design, Development",
    tools: "AI-assisted development, GitHub workflow, web technologies",
    status: "Working prototype",
    img: "assets/codease-request.png",
    challenge: [
      "After building workplace websites, I started thinking about what happens when the person who built them leaves. Routine updates can become difficult for staff who do not know HTML, JavaScript, Git, or the structure of the codebase.",
    ],
    approach: [
      "CodEase explores a controlled alternative: a staff member chooses a site, describes a change in plain English, reviews the proposed update, and then applies it through a repository-backed workflow.",
      "The goal is not to hide every technical detail. It is to make routine maintenance understandable while keeping changes reviewable.",
    ],
    development: [
      "I use AI throughout development, but the product decisions are mine: the problem definition, workflow, constraints, expected behavior, failure cases, and review process. The prototype works against real repositories and can carry an approved change through to an updated site.",
    ],
    outcome: [
      "CodEase is a working prototype, not an enterprise-ready product. It demonstrates the end-to-end idea using real web projects as test environments.",
    ],
    gallery: ["assets/codease-success.png", "assets/codease-result.png"],
  },
  circ: {
    title: "Circ AI",
    meta: "AI · KNOWLEDGE DESIGN · WORKFLOW",
    sub: "Preserving institutional knowledge and making library procedures easier for staff to access.",
    role: "AI Workflow & Knowledge Design",
    tools: "Gemini Gems, documentation preparation, ChatGPT",
    status: "Internal application · access restricted",
    img: "assets/circ-ai.png",
    challenge: [
      "An experienced supervisor who held extensive knowledge of library policies was preparing to leave. Staff frequently depended on her—or on people who had learned directly from her—for procedural questions, creating a clear institutional-knowledge risk.",
    ],
    approach: [
      "I had recently learned how to design Gemini Gems during an internship, so I adapted that capability to the library. I organized library documentation into a knowledge source that staff could question conversationally instead of searching through scattered material.",
    ],
    development: [
      "I personalized the assistant around ARC Library use and prepared source documentation for the knowledge base. ChatGPT assisted with transforming documents into Markdown-friendly material. The focus was practical: staff should be able to ask a policy or workflow question and get a useful answer grounded in the supplied material.",
    ],
    outcome: [
      "Circ AI is used internally by staff when questions about library procedures and policies come up. Because it contains internal operational material, public access is intentionally restricted.",
    ],
    gallery: ["assets/circ-ai-answer.png"],
  },
  lcc: {
    title: "LCC Training",
    meta: "INTERACTIVE DESIGN · LEARNING EXPERIENCE",
    sub: "Helping new library employees learn the Library of Congress Classification system.",
    role: "Experience Design, Structure, Front-End",
    tools: "Web technologies, Claude Code",
    status: "Live training experience",
    img: "assets/lcc.png",
    challenge: [
      "When I joined the library, I found the Library of Congress Classification system difficult to learn. Existing exercises helped with shelving and reorganization, but I wanted a more structured path that combined instruction and practice.",
    ],
    approach: [
      "I created the lesson structure and learning order so a new employee could read the material, progress through the training, complete a quiz, and download a report of the result.",
    ],
    development: [
      "I designed the structure and learning flow. Claude Code assisted with improving the visual design and functionality during development.",
    ],
    outcome: [
      "The training became a practical onboarding resource, and I observed new employees learning the classification workflow more successfully after using it. I do not present that as a measured statistic because I did not run a formal study.",
    ],
    gallery: [],
  },
  library: {
    title: "ARC Library Hub",
    meta: "WEB DESIGN · INFORMATION ARCHITECTURE · FRONT-END",
    sub: "The first project in my approach to centralized workplace resources.",
    role: "Web Design, Organization, Front-End Development",
    tools: "HTML, CSS, JavaScript, Claude Code",
    status: "Staff resource hub",
    img: "assets/library-hub.png",
    challenge: [
      "Library staff relied heavily on individual browser bookmarks for frequently used resources. Those collections could become disorganized or disappear, and there was no centralized staff hub.",
    ],
    approach: [
      "I initiated the project independently because I wanted to make everyday work easier for myself and coworkers. I designed the organization, navigation, and content experience around library-specific resources.",
    ],
    development: [
      "I designed and personalized the project. During development I used Claude Code specifically to help develop and improve the CSS rather than treating AI as the source of the project concept or information architecture.",
    ],
    outcome: [
      "The project created a centralized place for staff resources and became the starting point for how I thought about workplace resource design. I later carried those lessons into the more refined LRC Hub.",
    ],
    gallery: [],
  },
};
const key = new URLSearchParams(location.search).get("project") || "lrc",
  p = data[key] || data.lrc;
document.title = p.title + " — Mohammad Khalid Daneshwar";
for (const [id, val] of Object.entries({
  title: p.title,
  meta: p.meta,
  sub: p.sub,
  role: p.role,
  tools: p.tools,
  status: p.status,
}))
  document.getElementById(id).textContent = val;
const hi = document.getElementById("heroimg");
hi.src = p.img;
hi.alt = p.title + " project interface";
for (const s of ["challenge", "approach", "development", "outcome"])
  document.getElementById(s).innerHTML = p[s]
    .map((x) => `<p>${x}</p>`)
    .join("");
document.getElementById("gallery").innerHTML = (p.gallery || [])
  .map((x) => `<img src="${x}" alt="Supporting ${p.title} screenshot">`)
  .join("");
if (!p.gallery?.length)
  document.getElementById("gallery").style.display = "none";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
