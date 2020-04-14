import * as React from 'react';
import styles from './MyNewWebPart.module.scss';
import modalStyles from './Modal.module.scss';
import { IMyNewWebPartProps } from './IMyNewWebPartProps';

// example of usage spfx-controls-react
import { ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';
import { RichText } from '@pnp/spfx-controls-react/lib/RichText';

import { Modal, IDragOptions } from 'office-ui-fabric-react/lib/Modal';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';

export default class MyNewWebPart extends React.Component<IMyNewWebPartProps, {}> {

  public state: any = {
    showModal: false,
    isDraggable: false
  };
  // Use getId() to ensure that the IDs are unique on the page.
  // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
  private _titleId: string = getId('title');
  private _subtitleId: string = getId('subText');
  private _dragOptions: IDragOptions = {
    moveMenuItemText: 'Move',
    closeMenuItemText: 'Close',
    menu: ContextualMenu
  };

  public render(): React.ReactElement<IMyNewWebPartProps> {
    return (
      <div>
        <div>
          <RichText value={'Initial text'} />
        </div>
        <div>
          <DefaultButton secondaryText='Opens the Sample Modal' onClick={this._showModal} text='Open Modal' />
          <Modal
            titleAriaId={this._titleId}
            subtitleAriaId={this._subtitleId}
            isOpen={this.state.showModal}
            onDismiss={this._closeModal}
            isBlocking={false}
            containerClassName={modalStyles.container}
            dragOptions={this.state.isDraggable ? this._dragOptions : undefined}
          >
            <div className={modalStyles.header}>
              <span id={this._titleId}>Lorem Ipsum</span>
            </div>
            <div id={this._subtitleId} className={modalStyles.body}>
              <DefaultButton onClick={this._closeModal} text='Close' />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate in
                leo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsum
                vestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In a
                odio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus,
                maximus in mollis ac, luctus vel eros. Vivamus ultrices, turpis sed malesuada gravida, eros ipsum venenatis elit, et volutpat
                eros dui et ante. Quisque ultricies mi nec leo ultricies mollis. Vivamus egestas volutpat lacinia. Quisque pharetra eleifend
              efficitur.{' '}
              </p>
            </div>
          </Modal>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <ListView
                items={[{
                  Id: 1, Title: 'Testing'
                },
                {
                  Id: 2, Title: 'Some value'
                },
                {
                  Id: 3, Title: 'Title goes here'
                }]}
                viewFields={[{
                  name: 'Id'
                }, { name: 'Title' }]}
                iconFieldName='ServerRelativeUrl'
                compact={true}
                selectionMode={SelectionMode.multiple}
                showFilter={true} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  private _showModal = (): void => {
    this.setState({ showModal: true });
  }

  private _closeModal = (): void => {
    this.setState({ showModal: false });
  }

}
