# Git

## Background

[Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the inventor of Linux, also invented [Git](https://en.wikipedia.org/wiki/Git).

A great book (a little old now) about his humble beginnings and curiosity, ["_Just for Fun_"](https://www.amazon.ca/Just-Fun-Story-Accidental-Revolutionary/dp/0066620732), by David Diamond. 

Linus created Git because he was pissed with other source control software out there. 

Here's a great video he did at Google tearing the other tools apart and generally calling lots of people morons :P :

[Linus Torvalds on git (Google Talks)](https://archive.org/details/LinusTorvaldsOnGittechTalk)


## #BLM and "main" branch

A recent change made across the industry in 2020 due to the #BLM protests stemming from [George Floyd](https://en.wikipedia.org/wiki/George_Floyd) was everyone encouraging to change from `master` branch to `main`. Thus you will see some documentation and references that have not been updated yet to this new nomenclature.


## Common Commands

`git clone [url]` - clone a repo

`git remote --v` - list remote links

`git add remote origin [your_fork_url]` - adding your fork

`git add remote upstream [teams_repo_url]` - adding team's repo

`git add status` - show what's committed or not

`git diff` - show the different changes

`git commit add .` - add new untracked files

`git commit -m "place a new message"` - commit a new change and adding a quick line

`git commit` - bring up a message window to place long details in you want



`git fetch upstream` - Only downloads new data from a remote repository - but it doesn't integrate any of this new data into your working files. Due to it's "harmless" nature, you can rest assured: fetch will never manipulate, destroy, or screw up anything. This means you can never fetch often enough.*

`git pull upstream [branch]` - In contrast, pull is used with a different goal in mind: to update your current HEAD branch with the latest changes from the remote server. This means that pull not only downloads new data; it also directly integrates it into your current working copy files.*  

<sup>*fetch and pull explained at this fine [git-tower.com Google result](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull/).</sup>


## Alias

We gotta ❤️ them shortcuts, and to setup them up for Git try the following setup in your `.gitconfig` file.

Mine was located in my home directory. (i.e. `~/.gitconfig`)

```
[alias]
hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
mylog = log --pretty=format:'%h %s [%an]' --graph
lol = log --graph --decorate --pretty=oneline --abbrev-commit --all
co = checkout
br = branch
ci = commit
st = status
last = log -1 HEAD
lg = log --graph --pretty=format:'%C(yellow)%d%Creset %C(cyan)%h%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=short --all

```

What's the magic?

Rather than typing out `branch` or `checkout` all the time, I can just use `br` and `co` respectively.

Also check out the visuals on some of these log aliases:

![alt text][git_lg]

[git_lg]: git_lg.png

