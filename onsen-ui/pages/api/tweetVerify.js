var Twit = require("twit");

export default function tweetVerify(req, res) {
  const { address, username } = req.query;
  if (!address || !username) {
    res.status(400).json({ error: "Bad request" });
  }
  console.log(address, username);
  const secrets = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  };
  const client = new Twit({
    ...secrets,
    app_only_auth: true,
  });
  const params = {
    screen_name: username,
    tweet_mode: "extended",
    exclude_replies: true,
    include_rts: false,
    count: 5,
  };

  return client
    .get("statuses/user_timeline", params)
    .catch((err) => {
      console.log("caught error", err.stack);
    })
    .then((res) => {
      let verification_url = "";
      res.data.forEach((tweet) => {
        console.log(tweet, "tweets");
        if (tweet.full_text.includes(address))
          verification_url = `https://twitter.com/${username}/status/${tweet.id_str}`;
      });
      if (verification_url) {
        return { verification_url, address, username, status: true };
      }
      return { address, username, status: false };
    })
    .then((data) => res.status(200).json(data));
}
