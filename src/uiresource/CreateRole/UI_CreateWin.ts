/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module CreateRole {

	export class UI_CreateWin extends fairygui.GComponent {
		public m_sexGroup:fairygui.Controller;
		public m_windowFrame:fairygui.GComponent;
		public m_usernameInput:fairygui.GTextInput;
		public m_sex0Btn:fairygui.GButton;
		public m_sex1Btn:fairygui.GButton;
		public m_loginBtn:fairygui.GButton;

		public static URL:string = "ui://cdmg6pcbbelo0";

		public static createInstance():UI_CreateWin {
			return <UI_CreateWin><any>(fairygui.UIPackage.createObject("CreateRole","CreateWin"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_sexGroup = this.getControllerAt(0);
			this.m_windowFrame = <fairygui.GComponent><any>(this.getChildAt(0));
			this.m_usernameInput = <fairygui.GTextInput><any>(this.getChildAt(3));
			this.m_sex0Btn = <fairygui.GButton><any>(this.getChildAt(5));
			this.m_sex1Btn = <fairygui.GButton><any>(this.getChildAt(6));
			this.m_loginBtn = <fairygui.GButton><any>(this.getChildAt(7));
		}
	}
}