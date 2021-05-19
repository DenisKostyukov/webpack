class Component{
  constructor(props){
    this.props= props;
  }
  render(){
    const elem = document.createElement('h1');
    elem.textContent = 'Hello webpack';
    elem.classList.add('heading');
    document.getElementById("root").append(elem);
  }
}

export default Component;