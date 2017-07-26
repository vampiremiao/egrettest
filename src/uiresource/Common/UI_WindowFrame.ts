/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Common {

	export class UI_WindowFrame extends fairygui.GComponent {
		public m_closeBtn:fairygui.GButton;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://y8fg084y9xy48";

		public static createInstance():UI_WindowFrame {
			return <UI_WindowFrame><any>(fairygui.UIPackage.createObject("Common","WindowFrame"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_closeBtn = <fairygui.GButton><any>(this.getChildAt(2));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}