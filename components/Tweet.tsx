import { View, Text, Image, StyleSheet } from "react-native";

import { TweetType } from "../types";
import { Entypo, EvilIcons } from '@expo/vector-icons'; 

type IconButtonProps = {
  icon: React.ComponentProps<typeof EvilIcons>["name"];
  text?: string | number;
};

const IconButton = ({ icon, text }: IconButtonProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <EvilIcons name={icon} size={24} color="grey" />

      <Text style={{ fontSize: 12, color: "grey" }}>{text} </Text>
    </View>
  );
};

type TweetProps = {
  tweet: TweetType;
};



const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image src={tweet.user.image} style={styles.userImage} />

      <View style={styles.MainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.name}>{tweet.user.name}</Text>
          <Text style={styles.username}>{tweet.user.username} • 2h</Text>
          <Entypo
            name="dots-three-horizontal"
            size={16}
            color="grey"
            style={{ marginLeft: "auto" }}
          />
        </View>

        <Text style={styles.content}>{tweet.content}</Text>

        {tweet.image && <Image src={tweet.image} style={styles.image} />}

        <View style={styles.footer}>
          <IconButton icon="comment" text={tweet.numberOfComments} />
          <IconButton icon="retweet" text={tweet.numberOfRetweets} />
          <IconButton icon="heart" text={tweet.numberOfLikes} />
          <IconButton icon="chart" text={tweet.impressions || 0} />
          <IconButton icon="share-apple" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  MainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontWeight: "bold",
  },
  username:{
    color:"grey",
    marginLeft:5,
  },
  content: {
    lineHeight: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
    marginVertical:10,
    borderRadius: 15, 
  },

  //footer
  footer:{
    flexDirection: "row",
    marginVertical:5,
    justifyContent: "space-between",
  },
});

export default Tweet;