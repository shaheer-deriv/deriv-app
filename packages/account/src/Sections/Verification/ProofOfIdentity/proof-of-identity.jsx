import React from 'react';
import { withRouter } from 'react-router-dom';
import { AutoHeightWrapper } from '@deriv/components';
import routes from '@deriv/shared/utils/routes';
import { connect } from 'Stores/connect';
import { WS } from 'Services/ws-methods';
import DemoMessage from 'Components/demo-message';
import MissingPersonalDetails from 'Components/poi-missing-personal-details';
import ProofOfIdentityContainer from './proof-of-identity-container.jsx';

class ProofOfIdentity extends React.Component {
    routeBackTo = () => {
        if (this.props.is_from_p2p) {
            //remove hash once p2p is ready
            this.props.routeBackInApp(this.props.history, [routes.cashier_p2p]);
        }
    };

    render() {
        console.log(this.props.is_from_p2p);
        if (this.props.is_virtual) return <DemoMessage />;
        if (this.props.has_missing_required_field) return <MissingPersonalDetails />;

        return (
            <AutoHeightWrapper default_height={200}>
                {({ setRef, height }) => (
                    <div ref={setRef} className='proof-of-identity'>
                        <ProofOfIdentityContainer
                            serviceToken={WS.serviceToken}
                            notificationEvent={WS.notificationEvent}
                            getAccountStatus={WS.authorized.getAccountStatus}
                            addNotificationByKey={this.props.addNotificationByKey}
                            removeNotificationByKey={this.props.removeNotificationByKey}
                            removeNotificationMessage={this.props.removeNotificationMessage}
                            refreshNotifications={this.props.refreshNotifications}
                            height={height}
                            show_redirect_btn={this.props.is_from_p2p}
                            routeBackInApp={this.routeBackTo}
                        />
                    </div>
                )}
            </AutoHeightWrapper>
        );
    }
}

export default connect(({ client, ui, common }) => ({
    has_missing_required_field: client.has_missing_required_field,
    is_virtual: client.is_virtual,
    refreshNotifications: client.refreshNotifications,
    addNotificationByKey: ui.addNotificationMessageByKey,
    removeNotificationByKey: ui.removeNotificationByKey,
    removeNotificationMessage: ui.removeNotificationMessage,
    routeBackInApp: common.routeBackInApp,
    is_from_p2p: common.is_from_p2p,
}))(withRouter(ProofOfIdentity));
