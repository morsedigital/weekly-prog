// Libraries
const React = require('react');

const DataHead     = require('./data_head')
    , DataExpander = require('./data_expander_item')
    , NoSessions   = require('./stateless/no_sessions')
    , Paginate     = require('./stateless/paginate')
    , PeriodHead   = require('./stateless/period_head');

// Flux
const ColumnsStore   = require('../../stores/columns_store')
    , SessionsStore = require('../../stores/sessions_store');

// Mixins
const cssMixins  = require('morse-react-mixins').css_mixins
    , textMixins = require('morse-react-mixins').text_mixins;

class PeriodSessions extends React.Component{
  constructor(props){
    super(props);
    let st, fn, sessions, hidden;
    st = this.props.time.st;
    fn = this.props.time.fn;
    sessions = this.props.sessions.getTimePeriod(st, fn);

    hidden = (sessions.size <= 100);
    this.pagination = ['weekly-pagination', {hidden: hidden}];

    this.state = {
      columns: []
      , data: sessions
      , keys: []
      , visible: []
      , device: 'desktop'
      , paginate: 4
      , pagination_css: this.getClasses(this.pagination)
    };
  }

  componentWillMount(){
    this.setState({columns: ColumnsStore.getVisible()});
  }

  componentDidMount(){
    // Data Changers
    ColumnsStore.addChangeListener('change', this._onChange.bind(this));
    SessionsStore.addChangeListener('changing_date', this._onLoaded.bind(this));
    SessionsStore.addChangeListener('fetched', this._onLoaded.bind(this));
  }

  componentWillUnmount(){
    SessionsStore.removeChangeListener('changing_date', this._onLoaded);
    SessionsStore.removeChangeListener('fetched', this._onLoaded);
    ColumnsStore.removeChangeListener('change', this._onChange);
  }

  _renderData(){
    if (this.state.data && this.state.data.size > 0){
      return this._renderSessions();
    }
    return this._renderNoSessions();
  }

  _renderNoSessions(){
    return (
        <NoSessions
          no_session={this.props.no_sessions}
          title={this.props.title} />);
  }

  _renderSessions(){
    let data = this.state.data.slice(0, this.state.paginate);
     // console.log(data)
    return data.map((d)=>{
      return (
        <DataExpander
          css  = {this.props.css}
          data = {d}
          key  = {this.createId('session', d.get('id'))} />
        );
    });
  }

  render(){
    return (
      <section key="items" className={this._setCss()}>
        <PeriodHead title={this.props.title} />
        <div className="table">
          <DataHead columns={this.state.columns} css={this.props.css}  />
          <div className="tbody">
            {this._renderData(this.state.paginate)}
          </div>
        </div>
        <Paginate
          css     = {this.state.pagination_css}
          onClick = {this._paginate.bind(this)}
        />

      </section>
    );
  }

  _setCss(){
    return `panel ${this.props.title.toLowerCase()}`;
  }

  _onChange(){
    let columns = ColumnsStore.getKeyAndTitle();
    this.setState({
      columns: columns
    });
  }

  _onLoaded(){
    let sessions, st, fn;
    st = this.props.time.st;
    fn = this.props.time.fn;
    sessions = SessionsStore._getDate().data;
    sessions = sessions.getTimePeriod(st, fn);
    this.pagination[1].hidden = (sessions.size <= 100);
    this.setState({
      paginate: 100
      , pagination_css: this.getClasses(this.pagination)
      , data: sessions
    });
  }

  _paginate(e){
    e.preventDefault();
    let pag = this.state.paginate + 10;
    if (pag > this.state.data.size){
      this.pagination  = this.toggleCss(this.pagination);
    }

    this.setState({
      paginate: pag
      , pagination_css: this.getClasses(this.pagination)
    });
  }
}

Object.assign(PeriodSessions.prototype, cssMixins);
Object.assign(PeriodSessions.prototype, textMixins);

module.exports = PeriodSessions;
