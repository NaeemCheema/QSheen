import React, { Component } from 'react';
import {
  FlatList, Image, View, SafeAreaView
} from 'react-native';

import {
  Text, Touchable
} from '../../components';

import {screens} from '../../config';
import { images } from '../../constants';
import styles from './sidebar.styles';

class Sidebar extends Component {
  state={
    selectedCategory: null,
  };
  componentDidMount() {
    this.props.fetchCategoriesRequest();
  }
  render() {
    const {categoriesData, profileData} = this.props;
    return (
      <SafeAreaView style={styles.screen}>
        <View style={styles.header}>
          <Image source={images.userAccount} />
          <View style={{ flex: 1, marginLeft: 6, marginTop: 6 }}>
            <Text style={styles.userName}>{profileData.data !== null ? profileData.data.display_name : 'User Name'}</Text>
            <Text style={styles.loginAction}>{profileData.data !== null ? profileData.data.display_name : 'User Name'}</Text>
          </View>
          <Touchable onPress={()=>{this.props.navigation.navigate("Profile")}}>
            <Text style={styles.accountAction}>ACCOUNT</Text>
          </Touchable>
          
        </View>
        <View style={styles.headerSeperator} />

        <Touchable style={styles.rowItem} onPress={() => this.props.navigation.navigate(screens.designerStack)}>
          <Text style={styles.rowTitle}>DESIGNERS</Text>
        </Touchable>
        <Touchable style={[styles.rowItem, {paddingBottom: 20}]} onPress={() => this.props.navigation.navigate(screens.brandStack)}>
          <Text style={styles.rowTitle}>BRANDS</Text>
        </Touchable>
        <View style={styles.rowSeparator} />
        <FlatList
          data={categoriesData.data}
          renderItem={this._renderCategoryItem}
          keyExtractor={(item, index) => String(index)}
          style={{width: '100%'}}
        />
      </SafeAreaView>
    );
  }

  _renderCategoryItem = ({item, index}) => {
    const {selectedCategory} = this.state;
    return (
      <>
        <Touchable
          style={styles.categoriesRow}
          onPress={() => {
            if (selectedCategory == index) {
              this.setState({ selectedCategory: null })
            } else {
              this.setState({ selectedCategory: index })
            }
          }}
        >
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.plusSign}>{selectedCategory == index? '-' : '+'}</Text>
        </Touchable>
        {
          selectedCategory == index?
          <FlatList
            data={item.subcategories}
            renderItem={({item, index}) => (
              <Touchable 
                style={styles.subCategoryContainer} 
                onPress={() => this.props.navigation.navigate(screens.mainStack, {
                  screen: screens.categorydetail,
                  params: {
                    item,
                  }
                })} 
              >
                <Text style={styles.subCategory}>{item.title}</Text>
              </Touchable>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
            keyExtractor={(item, index) => String(index)}
            style={{ marginBottom: 10 }}
          /> : null
        }
        <View style={styles.rowSeparator} />
      </>
    );
  }
}

export default Sidebar;
