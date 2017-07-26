/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Login {

	export class UI_LoginWin extends fairygui.GComponent {
		public m_windowFrame:fairygui.GComponent;
		public m_usernameInput:fairygui.GTextInput;
		public m_loginBtn:fairygui.GButton;

		public static URL:string = "ui://n5dz0ekst9cia";

		public static createInstance():UI_LoginWin {
			return <UI_LoginWin><any>(fairygui.UIPackage.createObject("Login","LoginWin"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_windowFrame = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_usernameInput = <fairygui.GTextInput><any>(this.getChildAt(3));
			this.m_loginBtn = <fairygui.GButton><any>(this.getChildAt(4));
		}
	}
}