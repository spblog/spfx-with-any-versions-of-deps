import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';
import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import * as strings from 'HelloWorldWebPartStrings';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo: string = require('./../../../assets/google.gif');

const HelloWorld: React.FunctionComponent<IHelloWorldProps> = ({ context }) => {

  React.useEffect(() => {
    context.spHttpClient.get(`${context.pageContext.web.absoluteUrl}/_api/web`,
      SPHttpClient.configurations.v1)
      .then((response: SPHttpClientResponse) => {
        return response.json();
      })
      .then(response => {
        console.log(response);
      });
  }, [])

  const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };
  return (
    <div>
      <div>
        <img src={logo} />
      </div>
      <div>
        <span className={styles.title}>Welcome to SharePoint!</span>
        <br />
        <DefaultButton text={strings.AnotherProp} />
      </div>
      <div>
        <Stack horizontal tokens={{ childrenGap: 50 }} styles={{ root: { width: 650 } }}>
          <Stack {...columnProps}>
            <TextField label='Standard' />
            <TextField label='Disabled' disabled defaultValue='I am disabled' />
            <TextField label='Read-only' readOnly defaultValue='I am read-only' />
            <TextField label='Required ' required />
            <TextField required />
            <TextField label='With error message' errorMessage='Error message' />
          </Stack>
        </Stack>
      </div>
    </div>
  );
}

export default HelloWorld;
