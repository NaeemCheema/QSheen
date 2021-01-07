import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import Modal from 'react-native-modal';

import {
    Text,
    Touchable,
} from '../../../components';
import styles from './delete-cart-item.style';

class DeleteCartItemPopup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal isVisible={this.props.isModalVisible}>
                <View style={styles.deleteConfirmationDialogue}>
                    <View style={styles.deleteConfirmationTextBox}>
                        <Text style={styles.deleteConfirmationText}>Are you sure you want to delete this item from your Cart?</Text>
                    </View>
                    <View style={styles.deleteButtonsContainer}>
                        <Touchable style={styles.deleteButtonsSubContainerCancel} onPress={this.props.onPressCancel}>
                            <Text style={styles.deleteCancelStyles}>Cancel</Text>
                        </Touchable>
                        <Touchable style={styles.deleteButtonsSubContainer} onPress={this.props.onPressOk}>
                            <Text style={styles.deleteOkStyles}>Ok</Text>
                        </Touchable>
                    </View>
                </View>
            </Modal>
        );
    }
}

export { DeleteCartItemPopup };
