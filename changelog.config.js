module.exports = {
  breakingChangePrefix: '๐งจ ',
  closedIssuePrefix: 'โ ',
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
      emoji: 'โจ',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '๐',
      value: 'fix'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '๐งช',
      value: 'test'
    },
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '๐ค',
      value: 'chore'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '๐',
      value: 'docs'
    },
    refactor: {
      description: 'A code change that neither fixes a bug or adds a feature',
      emoji: 'โป๏ธ',
      value: 'refactor'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '๐',
      value: 'style'
    },
    ci: {
      description: 'CI related changes',
      emoji: '๐ท',
      value: 'ci'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: 'โก๏ธ',
      value: 'perf'
    },
    build: {
      description: 'Changes version tags',
      emoji: '๐',
      value: 'build'
    },
    revert: {
      description: 'Reverts a previous commit',
      emoji: 'โช',
      value: 'revert'
    },
    improvement: {
      description: 'Improvements structure / format of the code',
      emoji: '๐จ',
      value: 'improvement'
    }
  },
  messages: {
    type: 'Select the type of change that you are committing:',
    // scope: 'Denote the SCOPE of this change (optional)',
    customScope: 'Select the scope this component affects:',
    subject: 'Write a short description of the change:\n',
    body: 'Provide a longer description of the change (optional):\n ',
    breaking: 'List any breaking changes (optional):\n',
    footer: 'Issues this commit closes, e.g #123 (optional):',
    footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
    customFooterPrefixs: 'Input ISSUES Prefix:',
    confirmCommit: 'The packages that this commit has affected (optional):\n'
  },
  // allowCustomScopes: true,
  // allowEmptyScopes: true,
  // customScopesAlign: 'bottom',
  // customScopesAlias: 'custom',
  // emptyScopesAlias: 'empty',
  // upperCaseSubject: false,
  // allowBreakingChanges: ['feat', 'fix'],
  // breaklineNumber: 100,
  // breaklineChar: '|',
  // skipQuestions: [],
  // issuePrefixs: [
  //   {
  //     value: 'link',
  //     name: 'link:'
  //   },
  //   {
  //     value: 'closed',
  //     name: 'closed:'
  //   }
  // ],
  // customIssuePrefixsAlign: 'top',
  // emptyIssuePrefixsAlias: 'skip',
  // customIssuePrefixsAlias: 'custom',
  confirmColorize: true
  // maxHeaderLength: null,
  // maxSubjectLength: null,
  // minSubjectLength: 0,
  // defaultBody: '',
  // defaultIssues: '',
  // defaultScope: '',
  // defaultSubject: ''
};
