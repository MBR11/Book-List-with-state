import React, {Component} from 'react';
// import ReactDOM from 'react-dom'

const grid={
    border : '2px black solid',
    padding: '20px',
    margin: '50px'
    }

    const titlestyle={
        margin:'50px'
    }



class BookData extends Component{
    state = {
        books:[
            {id:1,book:"And Then There Were None",author:"Agatha Christie",image:"https://images-eu.ssl-images-amazon.com/images/I/41-yT675QKL._SY346_.jpg",toggleinfo:"book1info"},
            {id:2,book:"Half Girlfriend",author:"Chetan Bhagat",image:"https://images-eu.ssl-images-amazon.com/images/I/51LxEF0TmgL.jpg",toggleinfo:"book2info"},
            {id:3,book:"The Alchemist",author:"Paulo Coelho",image:"https://images-eu.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SY346_.jpg",toggleinfo:"book3info"},
            {id:4,book:"One Time Will Tell",author:"Jeffrey Archer",image:"https://images-eu.ssl-images-amazon.com/images/I/51IyVkD9GeL.jpg",toggleinfo:"book4info"},
            {id:5,book:"The Monk Who Sold His Ferrari",author:"Robin Sharma",image:"https://images-eu.ssl-images-amazon.com/images/I/41Y2AavtfNL._SY346_.jpg",toggleinfo:"book5info"}
        ]
        
        
    };

    handleDelete = ID => {
        
        
            const books = this.state.books.filter(item => item.id !== ID);
            this.setState({ books: books });
          
      };
    

     
   

         

    render(){
        return(
            <section>
                <h1  style={titlestyle}>THE BOOK SHOP</h1>
                {this.state.books.map(item=>(
                    <Child key={item.id} info={item} onDelete={this.handleDelete}/>
                ))}
                
                
            </section>
        )
    }
}




class Child extends Component{

    state={search:0}

    clickIncrement= ()=>{
        this.setState({search: this.state.search+1})
    }

    resetCount= ()=>{
        this.setState({search: 0})
    }

    clickDecrement= ()=>{
       
        this.setState({search: this.state.search-1})
        
        if(this.state.search<=(0)){
            this.setState({search: 0})
        }
    }

    


    render(){
        const {book,author,image} = this.props.info;

         
        
        return(
            
                <article style={grid}>
                <img src={image} alt='booksimg' width='250px' height='300px'></img>
                <h3>Title : {book}</h3>
                <h4>Author : {author}</h4>
                <h3>Count : {this.state.search}</h3>
                <button onClick={this.clickIncrement}>Add Book</button> 
                <button onClick={this.resetCount}>Reset</button> 
                <button onClick={this.clickDecrement}>Remove Book</button> 

                <div>
                <button onClick={()=>this.props.onDelete(this.props.info.id)}>Delete Book</button>
                
                </div>
                
               
            <ShowToggleInfo/>
                {/* <div>
                <button onClick={()=>this.props.onToggle(this.props.info.id)}>Toggle</button>
                
                </div> */}
               
               
                
                 


            </article>

            
           
            
        )


        
    }
}







class ShowToggleInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
        visibility: false
        };
       
        this.toggleVisibility = this.toggleVisibility.bind(this);
      
        }
        
        
        
        toggleVisibility(){
        this.setState({
        visibility: !this.state.visibility
        })
        }
        
        
        render() {

            

            if (this.state.visibility) {
                
                
                
                return (
                    
                  <div>
                    <button onClick={this.toggleVisibility}>Toggle</button>
                       
                    <h1>Book Information</h1>
                  </div>
                );
              } else {
                return (
                  <div>
                    <button onClick={this.toggleVisibility}>Toggle</button>
                  </div>
                );
              }
        }
}


export default BookData;