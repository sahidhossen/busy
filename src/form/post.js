var React = require("react"),
	ReactRedux = require("react-redux"),
	validator = require('validator'),
	actions = require("../actions");

var Campaign = React.createClass({
	render: function(){
		return (
			<div className="mod-main">
				<div className="mod-header"><h2>Create Article</h2></div>
				<div className="mod-content">
					<fieldset className="form-group">
						<label for="formGroupExampleInput">Name</label>
						<input autoFocus type="text" className="form-control form-control-lg" ref="title" />
					</fieldset>
					<fieldset className="form-group">
						<label for="formGroupExampleInput">Body</label>
						<input type="text" className="form-control form-control-lg" ref="body" />
					</fieldset>
					<fieldset className="form-group">
						<label for="formGroupExampleInput">Tags</label>
						<input type="text" className="form-control form-control-lg" ref="tags" />
					</fieldset>
				</div>
				<div className="mod-footer">
					<a href="#" onClick={() => this.props.hideModal()}>Close</a> <button type="submit" className="btn btn-primary btn-lg">Save</button>
				</div>
			</div>);
	}
});

var mapStateToProps = function(state){
	return {
		modal: state.modal,
		auth: state.auth
	};
};

var mapDispatchToProps = function(dispatch){
	return {
		showModal: function(page){ dispatch(actions.showModal(page)); },
		hideModal: function(){ dispatch(actions.hideModal()); }
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Campaign);