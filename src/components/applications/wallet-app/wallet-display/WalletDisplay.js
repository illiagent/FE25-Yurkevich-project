import React, { Component } from "react";

export default class WalletDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: "",
    };
  }

  componentDidMount() {
    fetch("https://www.nbrb.by/api/exrates/rates?ondate=2020-5-30&periodicity=0")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { items } = this.state;
    const { val } = this.props;
    return (
      <div>
        <div>Сумма в рублях:{val * 1}BYN</div>
        <div>Сумма в долларах:{parseInt(val / 2.5)}$</div>
      </div>
    );
  }
}
//     if (error) {
//       return <div>Ошибка: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Загрузка...</div>;
//     } else {
//       return (
//         <ul>
//           {items.map((item) => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
