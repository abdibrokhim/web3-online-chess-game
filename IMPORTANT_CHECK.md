## Just a Quck Intro

I want to share a recent incident that happened to me. I decided to share this after receiving multiple messages from blockchain engineers. I believe it’s important to be aware of the risks when working with Web3 technologies and projects. I hope this story helps you to be more cautious and protect your assets.

## Malware Attack 1: Web3 Online Chess Game

Here’s how it happened:

I was scrolling through my LinkedIn feed as usual when a person named `Saul Alonso` (who has since deleted his LinkedIn account) reached out to me. He asked if I was interested in joining a Web3 development company.

![Screenshot](/screenshots/chess/test1-online-chess-game-linkedin-m1.png)

![Screenshot](/screenshots/chess/test1-online-chess-game-linkedin-m2.png)

But first, I needed to complete a task he assigned. He asked for my email address and invited me to Slack. I accepted the invitation and joined the Slack channel.

There was another person waiting for me named `Javier Fiesco`. He invited me to the GitHub repository.

![Screenshot](/screenshots/chess/test1-online-chess-game-invite-gmail.png)

I cloned the repository. Here’s the link to that repo (https://github.com/abdibrokhim/web3-online-chess-game), which is hosted under my GitHub account. (Warning: Do not try to run it. If you do, do not make any transactions.) Javier Fiesco told me about the task, which was also clearly mentioned in the project’s `README.md` file.

![Screenshot](/screenshots/chess/task-chess-readmemd.png)

He gave me one hour to complete the task. At first, I didn’t really understand, so I submitted it without completing the second task, which was connecting to the Metamask wallet. Later, I found what seemed like a bug (I’m not sure if it was intentional) in the file `src/utils/address.js`: `export const chainId = 0x61;`, which is not a valid chainId.

**Notes:**
```js
// Ethereum Mainnet: 0x01
// Polygon (MATIC): 0x89
// Ethereum Classic: 0x3d
```

![Screenshot](/screenshots/chess/Ethereum-Mainnet.png)

![Screenshot](/screenshots/chess/Ethereum-Mainnet-deepseek.png)

> (i don’t know why they left it like that.)

After that, he deleted the Slack channel, mentioning that I failed the test. 

> (i forgot to take a screenshot of the Slack conversation.) 

I went back to LinkedIn and messaged `Saul Alonso`, asking what happened and why I was removed from the discussion with `Javier`.

![Screenshot](/screenshots/chess/test1-online-chess-game-linkedin-m3.png)

**Rest of the conversation:**

![Screenshot](/screenshots/chess/test1-online-chess-game-linkedin-m4.png)

![Screenshot](/screenshots/chess/test1-online-chess-game-linkedin-m5.png)

![Screenshot](/screenshots/chess/invited-to-test1-online-chess-game-repo.png)

![Screenshot](/screenshots/chess/test1-online-chess-game-hosted-under-this-repo.png)

To start the project locally, you would run `npm run dev` or `npm start`. Looking at the scripts in `package.json`, the command being executed is `node server/app.js`.

![Screenshot](/screenshots/chess/script-runner-package-json.png)

I want to highlight what happens when you run this. In `app.js`, there’s code that calls a function `util.assets()`, and the return value `data` is passed to `eval(data)`. The `eval()` function executes a string as JavaScript code. 

> (yes, `eval` can be dangerous, i knew it from Python.)

![Screenshot](/screenshots/chess/eval-data.png)

If you look at `util.assets()`, the code is as shown below:

![Screenshot](/screenshots/chess/utils-calling-assets.png)

Now, let’s examine the file `'public/models/.svn/bower_components/assets'`. It loads SVG files, but these SVG files are obfuscated, as shown here:

![Screenshot](/screenshots/chess/obfuscated-svg.png)

Recently, someone named EdamAmex opened multiple issues on this GitHub repo, warning that it contains malware. The issue title was: “>>>>>>>> This is malware <<<<<<<<”.

![Screenshot](/screenshots/chess/issues-under-this-github-repo.png)

A similar article was posted by mameta | zkTokyo (a Blockchain Engineer, as mentioned on Zenn.dev), titled “All of the hacking tricks of Web3 developers (I was pulled out...)”. (Link: https://zenn.dev/mameta29/articles/7aa221046a87ff).

![Screenshot](/screenshots/chess/mameta-article.png)

Go through that article; he explains it in detail and even tries to decode the obfuscated SVG files (which I didn’t even attempt to do).

### Recent Posts on X (Twitter):

Various blockchain engineers have posted about similar incidents.

- **EdamAmex (Web Developer | Contributor of OSS)** on X posted: “I posted multiple issues to prevent the damage from spreading. However, since there are many similar repositories, it seems pointless to do this for all of them.” Link to the post: https://x.com/amex2189/status/1894993764990734398.

- **Cheena** on X posted: “Web3 developers need to be really careful, the North Korean criminal group Lazarus is targeting you. If you clone a repository and try to run npm run dev to get it running, a stealer disguised as an asset will be triggered and your wallet files will be extracted! C2: 94.131.97.195:1224”. Link to the post: https://x.com/cheenanet/status/1894794342830874627.

- **mameta | zkTokyo (Blockchain Engineer)** on X posted: “Ugh, I was on LinkedIn asking for help with an overseas project, and when I asked them to share their screen so I could explain the project, what popped up in Connect Wallet wasn’t Metamask, but an embedded HTML that looked like it. I was so scared that I lost my temper. I was so angry that I said in my poor English, ‘Not a good man. This is not good.’”. Link to the post: https://x.com/mameta_zk/status/1894767610556002581.

## Malware Attack 2: Token Voting App

**(Note: I’m not sure if this was a malware attack, but it seemed suspicious, especially after the first incident.)**

On February 15, I received a message from a person named Jaime Jorge Martinez Agredano. He said, “I have a blockchain project to complete.” He also shared this company page: https://nerdunited.com/.

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-linkedin-ms1.png)

**Other messages from him:**

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-linkedin-ms2.png)

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-linkedin-ms3.png)

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-linkedin-ms4.png)

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-linkedin-ms5.png)

Here’s the project proposal he shared with me:

![Screenshot](/screenshots/Token_voting_app/proposal-project-voting.png)

Then he shared the GitHub repository link (https://github.com/devinicol/Token_voting_app) with me and said, “I’d appreciate it if you kept this project confidential and didn’t share it with anyone. I look forward to check your suggestion.”

Personally, it looked suspicious again. I don’t know, maybe I wasn’t careful enough or didn’t check everything thoroughly, but I noticed that the repo owner had joined GitHub just three weeks ago.

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-github-owner.png)

Now, the repo he shared with me is no longer available.

![Screenshot](/screenshots/Token_voting_app/Token_voting_app-github-repo.png)

This GitHub owner has several suspicious repositories: https://github.com/instarco. For example, in https://github.com/instarco/trading-viewer-final/blob/main/public/.svn/logo, if you scroll down to line 328, there’s an obfuscated SVG. I think he might be the source of these incidents.

![Screenshot](/screenshots/other/malware-github-owner.png)

## Malware Attack 3: defy

I don’t exactly remember why I received an invitation to this repository.

![Screenshot](/screenshots/defy/defy-invite-repo.png)

![Screenshot](/screenshots/defy/defy-invite-owner.png)

## Malware Attack 4? (Might Be)

I received a random invite from someone in my Gmail inbox (screenshot below).

![Screenshot](/screenshots/other/got-random-invite-from-this-guy.png)

## Final Notes

I hope sharing this story will help you be more cautious and protect your assets.

> lol, i just noticed [Readme.md](/Readme.md) is in lowercase.

yaps.gg