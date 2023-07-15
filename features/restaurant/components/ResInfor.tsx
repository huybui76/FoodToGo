import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import start from '../../../assets/start';
import open from '../../../assets/open';

interface Restaurant {
  name?: string;
  address?: string;
  phone?: string;
  image?: string[];
  rating?: number;
  isOpenNow?: boolean;
  isClosedTemporarily?: boolean;
}

const ResInfor: React.FC<{ restaurant?: Restaurant }> = ({ restaurant = {} }) => {
  const {
    name = 'Gà nướng muối ớt',
    address = '100 nguyen huu to',
    phone = '0987654321',
    image = ['https://picsum.photos/700'],
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <View>
      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} source={{ uri: image[0] }} />
        <Card.Content>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.icons}>
            <View style={styles.start}>
              {ratingArray.map(() => (
                <SvgXml key={Math.random()} xml={start} height={20} width={20} />
              ))}
            </View>
            <View style={styles.open}>
              {isOpenNow && (
                <SvgXml style={styles.openIcon} xml={open} height={20} width={20} />
              )}
              {isClosedTemporarily && <Text style={styles.close}>Close</Text>}
            </View>
          </View>
          <Text style={styles.address}>{address}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ResInfor;

const styles = StyleSheet.create({
  card: { marginBottom: 14, backgroundColor: 'white' },
  title: {
    paddingTop: 21,
    paddingBottom: 5,
    paddingStart: 5,
    fontSize: 17,
  },
  address: {
    fontSize: 15,
    fontWeight: '300',
    paddingHorizontal: 5,
  },
  start: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  open: {
    paddingHorizontal: 5,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  icons: {
    flexDirection: 'row',
  },
  close: {
    fontSize: 17,
    paddingHorizontal: 9,
    color: 'red',
    fontWeight: '400'
  },
  openIcon: {
    alignSelf: 'flex-end',
    width: '100%',

  },
});
