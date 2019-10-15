import * as React from 'react';
import * as styles from './MyNewWebPart.module.scss';
import { IMyNewWebPartProps } from './IMyNewWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

// example of usage spfx-controls-react
import { ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';

export default class MyNewWebPart extends React.Component<IMyNewWebPartProps, {}> {
  public render(): React.ReactElement<IMyNewWebPartProps> {
    return (
      <div className={styles.myNewWebPart} >
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>Welcome to SharePoint!</span>
              <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
              <p className={styles.description}>{escape(this.props.description)}</p>
              <ListView
                items={[{
                  Id: 1, Title: 'Testing'
                }]}
                viewFields={[{
                  name: 'Id'
                }, { name: 'Title' }]}
                iconFieldName='ServerRelativeUrl'
                compact={true}
                selectionMode={SelectionMode.multiple}
                showFilter={true}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
