import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss'
import { compose, branch, renderComponent, withHandlers } from 'recompose';
import { Icon, Avatar } from 'antd';
import withUser from '../containers/withUser';
import Coins from '../common/Coins';
import { toFixedIfNeed } from '../helpers/gameUtils';
import { withLocalize } from 'react-localize-redux';

const RightBlock = ({ classes, logout, userInfo, translate }) => {
  return (
    <div className={classes.rightBlock}>
      <span className={classes.balance}>
        <span className={classes.balanceLabel}>{translate('BALANCE')}:</span>
        <span className={classes.balanceAmount}>
          <Coins /> <span className={classes.coinsAmount}>{toFixedIfNeed(userInfo.balance)}</span> <a>
          <Icon type="plus-circle-o" />
          </a>
        </span>
      </span>
      <div className={classes.userBlock}>
        <span className={classes.userName}>{userInfo.displayName || userInfo.email}</span>
        {
          userInfo.photo ?
          <Avatar size="small" className={`${classes.playerAvatar}`} src={userInfo.photo} /> :
          <Avatar size="small" className={classes.playerAvatar} icon="user" />
        }
        <Icon type="logout" className={classes.logOut} onClick={logout} />
      </div>
    </div>
  )
}

const styles = {
  logOut: {
    'font-size': '24px',
    'cursor': 'pointer',
    'vertical-align': 'sub',
    'padding-left': '10px'
  },
  rightBlock: {
    display: 'flex',
    marginLeft: 40,
    '@media(max-width: 600px)': {
      marginLeft: 0,
    }
  },
  userName: {
    lineHeight: 1.5,
    'margin-left': '20px',
    '@media(max-width: 600px)': {
      display: 'none',
    }
  },
  balanceAmount: {
    'font-size': '20px',
    'margin-left': '10px',
    whiteSpace: 'nowrap',
  },
  coinsAmount: {
    '@media(max-width: 600px)': {
      'font-size': '17px',
    }
  },
  balanceLabel: {
    '@media(max-width: 600px)': {
      display: 'none',
    }
  },
  playerAvatar: {
    marginLeft: 15,
  },
  userBlock: {
    display: 'flex',
    alignItems: 'center',
  }
};

RightBlock.defaultProps = {
  userData: null,
};

RightBlock.propTypes = {
  classes: PropTypes.object.isRequired,
  userInfo: PropTypes.object,
  logout: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
};

export default compose(
  withLocalize,
  injectSheet(styles),
  withUser(),
  branch(
    ({ userInfo }) => !userInfo,
    renderComponent(() => null)
  ),
  withHandlers({
    logout: ({ logout }) => () => {
      logout();
    }
  })
)(RightBlock);
