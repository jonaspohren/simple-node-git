const util = require('util')
const { exec } = require('child_process')

const git = {}
let repository = null

git.use = (pathToRepository) => {
  repository = pathToRepository
}

git.pull = (options = []) => {
  return execGitCommand('pull', options)
}

git.fetch = (options = []) => {
  return execGitCommand('fetch', options)
}

git.checkout = (options = []) => {
  return execGitCommand('checkout', options)
}

git.branch = (options = []) => {
  return execGitCommand('branch', options)
}

git.clean = (options = []) => {
  return execGitCommand('clean', options)
}

git.revParse = (options = []) => {
  return execGitCommand('rev-parse', options)
}

const execGitCommand = (command, options = []) => {
  return execCommand(`git ${command} ${options.join(' ')}`)
}

const execCommand = (command) => {
  return util.promisify(exec)(command, { cwd: repository })
}

module.exports = git
