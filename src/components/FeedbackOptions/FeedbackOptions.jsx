const FeedbackOptions = ({ options, onLeaveFeedback }) => {   
    return (
      <div>
        {options.map(option => (
          <button name={option} onClick={onLeaveFeedback} key={option}>
            {option}
          </button>
        ))}
      </div>
    );

};
export default FeedbackOptions;