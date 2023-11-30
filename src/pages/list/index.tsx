import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import LocationListItem from '../../components/locationListItem';
import {useAppSelector} from '../../modules/hooks';
import {ListScreenNavigateProps, LocationStateData} from './typed';

const List: React.FC<ListScreenNavigateProps> = ({navigation}) => {
  const savedLocations: LocationStateData[] = useAppSelector(
    state => state.system.location.locations,
  );

  return (
    <SafeAreaView>
      <FlatList
        data={savedLocations}
        renderItem={({item}) => (
          <LocationListItem navigation={navigation} item={item} />
        )}
        keyExtractor={item => item.autoId}
      />
    </SafeAreaView>
  );
};

export default List;
