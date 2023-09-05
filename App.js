

import React, { Component } from 'react';
import { View, Text ,NativeModules} from 'react-native';

class MyComponent extends Component {
    
  constructor(props) {
 
    

    super(props);
    this.state = {
      data: 'Initial Data',
    };
  }

  componentDidMount() {

     const { MyNativeModule } = NativeModules;
     MyNativeModule.sayHelloFromAndroid('React Native')
     .then(message => {
        

           // Update data every second
    this.interval = setInterval(() => {
        // Replace this logic with your data update logic
        const newData = message + new Date().getSeconds();
        this.setState({ data: newData });
      }, 1000); // 1000 milliseconds = 1 second


         console.log(message); // Output: Hello from Android: React Native
     })
     .catch(error => {
         console.error(error);
     });

  
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  render() {
    return (
      <View>
        <Text>{this.state.data}</Text>
      </View>
    );
  }
}

export default MyComponent;
