import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

function CommunityDataModule({ score, data }) {
  // console.log(data);
  return (
    <Grid item>
      <Card elevation={5}>
        <CardHeader title="Community Score" subheader="social media stats" />
        <CardContent>
          <Typography variant="h4">SCORE: {score.toFixed(2)}</Typography>
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Facebook Likes:</span>{" "}
            <span>
              {data.facebook_likes ? data.facebook_likes : "Not Found"}
            </span>
          </Typography>
          <Divider />
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Twitter Followers:</span>{" "}
            <span>
              {data.twitter_followers !== null
                ? data.twitter_followers
                : "Not Found"}
            </span>
          </Typography>
          <Divider />
          <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Reddit Subscribers: </span>{" "}
            <span>
              {data.reddit_subscribers ? data.reddit_subscribers : "Not Found"}
            </span>
          </Typography>
          <Divider />
        </CardContent>
      </Card>
    </Grid>
  );
}
export default CommunityDataModule;

// community_data:
// facebook_likes: null
// reddit_accounts_active_48h: 17
// reddit_average_comments_48h: 4.909
// reddit_average_posts_48h: 0.909
// reddit_subscribers: 26672
// telegram_channel_user_count: 47948
// twitter_followers: 562209
// [[Prototype]]: Object
// community_score: 42.917
