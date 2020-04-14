import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'HelloWorldWebPartStrings';
import HelloWorld from './components/HelloWorld';
import { IHelloWorldProps } from './components/IHelloWorldProps';

/**
 * Fix to make it work with OUIFR 7.x
 */

import { GlobalSettings } from '@uifabric/utilities/lib/GlobalSettings';
import { getTheme } from '@uifabric/styling/lib/styles/theme';

const customizations = GlobalSettings.getValue('customizations');
const theme = getTheme();
(customizations as any).settings.theme.effects = { ...theme.effects };
(customizations as any).settings.theme.spacing = { ...theme.spacing };
(customizations as any).settings.theme.fonts = { ...theme.fonts };
(customizations as any).settings.theme.semanticColors = { ...theme.semanticColors };

/**
 * End of fix
 */

export interface IHelloWorldWebPartProps {
    description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

    public render(): void {
        const element: React.ReactElement<IHelloWorldProps> = React.createElement(
            HelloWorld,
            {
                description: this.properties.description
            }
        );

        ReactDom.render(element, this.domElement);
    }

    protected onDispose(): void {
        ReactDom.unmountComponentAtNode(this.domElement);
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}
