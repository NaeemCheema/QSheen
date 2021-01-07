import React,{Component} from 'react';
import {
  View,Button,Text
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      box1: true,
      box2: true,
      box3:true
    };
  }
  toggleStatus(a){
    if(a===false){
    this.setState({
      box1:false,
      box2:true,
      box3:true
    });
   }
  }
  toggleStatus1(a){
    if(a===false){
      this.setState({
        box1:true,
        box3:true,
        box2:false
      });
     }
  }
  toggleStatus2(a){
    if(a===false){
      this.setState({
        box1:true,
        box2:true,
        box3:false
      });
     }
  }
  render() {
    return (
    <View style={{ backgroundColor: 'white',flex:1}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',padding:20}}>
    <Button  title='press 1' onPress={()=>{this.toggleStatus(false)}} />
    <Button title='press 2' onPress={()=>{this.toggleStatus1(false)}}/>
    <Button title='press 3' onPress={()=>{this.toggleStatus2(false)}}/>
    </View>
    <View style={{justifyContent:'center',alignItems:'center' ,marginTop:20 }}>
    {this.state.box1? null:<View>
      <Text style={{fontSize:40}}>1</Text>
    </View>
    }
    {this.state.box2? null:<View>
      <Text style={{fontSize:40}}>2hg</Text>
    </View>
    }
    {this.state.box3? null:<View>
      <Text style={{fontSize:40}}>3jjkhfty</Text>
    </View>
    }
    </View>
    </View>
    
  );
}
};


export default App;
