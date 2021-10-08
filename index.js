const core = require('@actions/core')
const github = require('@actions/github')

const octokit = github.getOctokit('GITHUB_TOKEN')

const run = async () => {
  const { context = {} } = github
  const { pull_request } = context.payload

  await octokit.issues.createComment({
    ...context.repo,
    issue_number: pull_request.number,
    body: 'Thank you for creating a pull request',
  })
}

run()
