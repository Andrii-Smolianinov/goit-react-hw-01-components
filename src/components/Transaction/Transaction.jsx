import PropTypes from 'prop-types';
import { TransactionWrapper } from './StylesTransactions';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionWrapper>
      <table className="table">
        <thead className="head">
          <tr>
            <th className="head-cell">Type</th>
            <th className="head-cell">Amount</th>
            <th className="head-cell">Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className="tbody-string" key={item.id}>
              <td className="tbody-cell">{item.type}</td>
              <td className="tbody-cell">{item.amount}</td>
              <td className="tbody-cell">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TransactionWrapper>
  );
};

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

TransactionHistory.propTypes = {
  arrayWithShape: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};