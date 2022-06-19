module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'feat',
    'fix',
    'test',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
    'build',
    'revert',
    'improvement'
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: [],
  types: {
    feat: {
      description: 'A new feature',
      emoji: '✨',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '🐛',
      value: 'fix'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '🧪',
      value: 'test'
    },
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '🤖',
      value: 'chore'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '📝',
      value: 'docs'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: '♻️',
      value: 'refactor'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '💄',
      value: 'style'
    },
    ci: {
      description: 'CI related changes',
      emoji: '👷',
      value: 'ci'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '⚡️',
      value: 'perf'
    },
    build: {
      description: 'Changes version tags',
      emoji: '🔖',
      value: 'build'
    },
    revert: {
      description: 'Reverts a previous commit',
      emoji: '⏪',
      value: 'revert'
    },
    improvement: {
      description: 'Improvements structure / format of the code',
      emoji: '🎨',
      value: 'improvement'
    }
  },
  messages: {
    type: 'Select the type of change that you are committing:',
    customScope: 'Select the scope this component affects:',
    subject: 'Write a short, imperative mood description of the change:\n',
    body: 'Provide a longer description of the change:\n ',
    breaking: 'List any breaking changes:\n',
    footer: 'Issues this commit closes, e.g #123:',
    confirmCommit: 'The packages that this commit has affected\n'
  }
};
