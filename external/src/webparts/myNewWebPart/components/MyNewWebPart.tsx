import * as React from 'react';
import * as styles from './MyNewWebPart.module.scss';
import { IMyNewWebPartProps } from './IMyNewWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

// example of usage spfx-controls-react
import { ListView, SelectionMode } from '@pnp/spfx-controls-react/lib/ListView';
import { RichText } from '@pnp/spfx-controls-react/lib/RichText';

export default class MyNewWebPart extends React.Component<IMyNewWebPartProps, {}> {

  public render(): React.ReactElement<IMyNewWebPartProps> {
    return (
      <div>
        <div>
          <RichText value={'Initial text'} />
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
}
