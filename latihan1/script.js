const root = document.querySelector("#root");
// const element = React.createElement('h1', {
//     children: 'Hello from react',
//     className: 'test',
//     id: 'text',
//     style: 'background-color: red'
// });

// const p1 = React.createElement('p', {
//     children: 'Paragraf 1'
// });
// const p2 = React.createElement('p', {
//     children: 'Paragraf 2'
// });
// const p3 = React.createElement('p', {
//     children: 'Paragraf 3',
//     className: 'test'
// });

// const parent = React.createElement('div', {
//     children: [p1, p2, p3]
// })

// const sayHello = (name, umur) => {
//     return `Hello ${name}, you are ${umur} years old`;
// }

// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const date = new Date();
// let month = months[date.getMonth()];
// const element = (
//     <div>
//         <ul>
//             <li>{sayHello('Ignas', 25)}</li>
//             <li>sekarang bulan {month}</li>
//             <img src="https://images.unsplash.com/photo-1654767619105-a623468e04dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
//         </ul>
//     </div>
// );
// ReactDOM.render(element, root);

// React Component
// const SayHello = (props) => {
//   return (
//     <div>
//       <h1>Hello {props.name}</h1>
//       <h2>saya adalah seorang {props.job} </h2>
//     </div>
//   );
// }

// const element = (
//   <>
//     <SayHello name="Ignas" job="Programmer" />
//     <SayHello name="Budi" job="Designer" />
//   </>
// );

function tick() {
  const element = (
    <div>
      <h1> Jam sekarang </h1>
      <h3
        style={{
          color: "red",
          fontSize: "20px",
        }}
      >
        {" "}
        {new Date().toLocaleTimeString()}
      </h3>
    </div>
  );

  ReactDOM.render(element, root);
}

setInterval(() => {
  tick();
}, 1000);

// const App = () => {

//     const [count, setCount] = React.useState(0);
//     // let count = state[0];
//     // const updateCount = state[1];
//     return (
//     <div>
//         <button onClick = {
//             () => setCount(count - 1)
//         }> - </button> { count }
//         <button onClick = {
//             () => setCount(count + 1)
//         } > + </button>
//         <tick/>
//     </div >
//     );
// }

ReactDOM.render(<App />, root);
